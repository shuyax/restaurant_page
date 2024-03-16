export function InitialPage (title,context){
    
    const content = document.getElementById('content')
    const card = document.createElement('div')
    const image = document.createElement('img')
    const headline = document.createElement('h3')
    const intro = document.createElement('div')

    card.classList.add('card')

    headline.textContent = title
    intro.textContent = context

    content.appendChild(card)
    card.appendChild(headline)
    card.appendChild(intro)
    card.appendChild(image)
};

