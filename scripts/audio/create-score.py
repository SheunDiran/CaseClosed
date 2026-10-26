"""Render an original, restrained 40-second mystery score. Output is an intermediate WAV.
No sampled or commercial recordings are used. Requires numpy and ffmpeg.
"""
import sys,wave
from pathlib import Path
import numpy as np
rate=44100
duration=40
size=rate*duration
left=np.zeros(size);right=np.zeros(size)
def note(start,length,freq,amplitude,kind='pad',pan=0):
    count=min(int(length*rate),size-int(start*rate))
    if count<=0:return
    t=np.arange(count)/rate
    if kind=='pad':
        envelope=np.minimum(t/1.2,1)*np.minimum((length-t)/1.8,1)
        wave1=np.sin(2*np.pi*freq*t+.003*np.sin(2*np.pi*.17*t))
        wave2=.35*np.sin(2*np.pi*freq*2*t)+.12*np.sin(2*np.pi*freq*3*t)
        sig=(wave1+wave2)*envelope*(.96+.04*np.sin(2*np.pi*.23*t))
    else:
        envelope=(1-np.exp(-t/0.012))*np.exp(-t/1.15)*np.minimum((length-t)/.25,1)
        sig=(np.sin(2*np.pi*freq*t)+.32*np.sin(2*np.pi*freq*2*t)*np.exp(-t/.8)+.12*np.sin(2*np.pi*freq*3*t)*np.exp(-t/.4))*envelope
    sig*=amplitude
    offset=int(start*rate)
    left[offset:offset+count]+=sig*np.sqrt((1-pan)/2)
    right[offset:offset+count]+=sig*np.sqrt((1+pan)/2)
# Suspended minor harmonies, with audible midrange rather than sub-bass reliance.
chords=[[146.832,220,293.665,349.228],[116.541,174.614,233.082,329.628],[130.813,195.998,293.665,349.228],[138.591,207.652,277.183,329.628]]
for bar in range(8):
    chord=chords[bar%4]
    for i,freq in enumerate(chord):note(bar*5,6.6,freq,.10 if i==0 else .06,'pad',(-.55,.35,-.2,.6)[i])
melody=[587.33,440,523.251,466.164,698.456,587.33,523.251,440,587.33,698.456,659.255,523.251,466.164,440,349.228,440]
for i,freq in enumerate(melody):note(.12+i*2.5,4.2,freq,.14,'piano',-.2 if i%2 else .2)
# A soft clock-like harmonic pulse, without sharp percussion or jump scares.
for i in range(32):note(.5+i*1.25,1.7,220 if i%2 else 146.832,.024,'piano',.1 if i%2 else -.1)
# Light stereo reflections, with no abrupt attack or percussion.
for channel in (left,right):
    original=channel.copy()
    for delay,gain in ((.19,.12),(.37,.08),(.61,.045)):
        samples=int(delay*rate);channel[samples:]+=original[:-samples]*gain
fade_in=np.minimum(np.arange(size)/int(.3*rate),1)
fade_out=np.minimum(np.arange(size)[::-1]/int(1.1*rate),1)
stereo=np.stack([left*fade_in*fade_out,right*fade_in*fade_out],axis=1)
stereo*=.86/np.max(np.abs(stereo))
output=Path(sys.argv[1]);output.parent.mkdir(parents=True,exist_ok=True)
with wave.open(str(output),'wb') as wav:
    wav.setnchannels(2);wav.setsampwidth(2);wav.setframerate(rate)
    wav.writeframes((stereo*32767).astype('<i2').tobytes())
print(f'Original score: {duration}s stereo; peak={np.max(np.abs(stereo)):.3f}; RMS={np.sqrt(np.mean(stereo**2)):.3f}')
