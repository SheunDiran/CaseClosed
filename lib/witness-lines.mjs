import { PEOPLE } from '../public/game/engine.js';

// A model selects only from permitted authored facts. It cannot create evidence.
export function witnessLines(name, admitted = false) {
  const p = PEOPLE[name];
  if (!p) return null;
  const lines = [{ id: 'account', context: 'General account of the incident', text: p.intro },
    ...p.questions.map(([context, text], i) => ({ id: 'question-' + i, context, text })),
    { id: 'unknown', context: 'Irrelevant question or information the witness does not know', text: 'I cannot give you a reliable answer to that. Ask me about my movements, the display, or what I told you.' }];
  if (admitted) lines.push({ id: 'admission', context: 'Revisit the admitted inconsistency', text: p.challenge });
  return lines;
}

export function scriptedQuestion(name, question, admitted = false) {
  const lines = witnessLines(name, admitted);
  if (!lines) return null;
  const text = question.toLowerCase();
  if (admitted && /admi|confess|truth|really happen|you lied/.test(text)) return lines.find(x => x.id === 'admission');
  const rules = name === 'Mara' ? [/earlier|reception|before|19:59/, /key|open|lock|badge/, /see|saw|door|view|entrance|position/]
    : name === 'Eli' ? [/power|light|blackout|outage|reset/, /carry|carrying|foam|photo|object|insert/, /enter|arriv|where|20:09/]
    : [/key|open|20:03/, /crop|photo|frame.*cut/, /camera|archive|case|20:06|empty/];
  const idx = rules.findIndex(re => re.test(text));
  return lines.find(x => x.id === (idx < 0 ? 'unknown' : 'question-' + idx));
}
