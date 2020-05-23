// Stáhněte is připravenou webovou stránku, která zobrazuje několik zajímavých zpráv, a zobrazte ji v prohlížeči. Veškeré úkoly z tohoto cvičení proveďte v JavaScriptové konzoli.
// Pomocí document.querySelector vyberte element body a uložte si jej do proměnné bodyElm. Pomocí této proměnné nastavte barvu pozadí elementu na hodnotu #e9e9e9.
// Do jiné proměnné vyberte element s třídou news a nastavte mu barvu pozadí na bílou a maximální šířku na 60rem.
// Vyberte element h1 a nastavte mu třídu na news__title. Nadpis by měl změnit styl. Nastavte také obsah nadpisu na text Aktuální novinky.
// Pomocí atributu id vyberte element obsahující první zprávu. Přidejte do jeho atributu class třídu post--main. První zpráva by tak měla mírně změnit svůj styl. Dejte pozor, aby na elementu zůstala i původní třída post.
// Vyberte obrázek v poslední zprávě a změnte jeho atribut src na obrázek img/zprava3-novy.jpg.

const bodyElm = document.querySelector('body')
bodyElm.style.backgroundColor = 'grey'

const newsElm = document.querySelector('.news')
newsElm.style.backgroundColor = 'white' 
newsElm.style.maxWidth = '60rem' 

const h1elm = document.querySelector('h1')
h1elm.className = 'news__title'
h1elm.textContent = 'Aktuální novinky'

const zprava1elm = document.querySelector('#zprava1')
zprava1elm.className = 'post post--main'

const img3elm = document.querySelector('#zprava3 .post__picture')
img3elm.src = 'img/zprava3.jpg'
