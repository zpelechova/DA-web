// Python zaokrouhlování

// Jak jistě znalci jazyka Python dobře vědí, funkce round v tomto jazyce zaokrouhluje malinko jinak, než jsme zvyklí. Pokud je desetinná část čísla přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. JavaScriptová funkce Math.round naopak provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru. Někomu by se po po Pythonovském zaokrouhlování mohlo stýskat. Napište proto funkci jménem round, která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel.

// Pokud je desetinná část menší než 0.5, zaokrouhlujeme dolů.
// Pokud je desetinná část větší než 0.5, zaokrouhlujeme nahoru.
// Pokud je desetinná část přesně rovna 0.5, zaokrouhlujeme k sudému číslu. Tedy například 3.5 se zaokrouhlí na 4, naopak 2.5 se zaokrouhlí na 2.
// V tomto cvičení se vám může hodit funkce Math.trunc, která umí odříznout desetinnou část čísla.

const python_round = (num) => {
  if (Math.trunc(num * 10) > (Math.trunc(num) * 10 + 5)) {
    return Math.ceil(num)
  } else if (Math.trunc(num * 10) < (Math.trunc(num) * 10 + 5)) {
    return Math.floor(num)
  } else if (Math.trunc(num * 10) === (Math.trunc(num) * 10 + 5)) {
    if (Math.trunc(num) % 2 === 0) {
      return Math.floor(num)
    } else {
      return Math.ceil(num)
    }
  }
}