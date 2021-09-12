function pairElement(str) {
  let base = ['AT', 'TA', 'CG', 'GC'];
  return str.split('').map(d => base.find(p => p[0] == d).split(''));
}

pairElement("GCG");