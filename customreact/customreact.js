function customRender(reachElement,container){
    //const domElement = document.createElement(reachElement.type)
    domElement.innerHTML = reachElement.children 
    domElement.setAttribute('href',reachElement.props.href) 
    domElement.setAttribute('target',reachElement.props.target)

    container.appendChild(domElement)
    
   const domElement = document.createElement(reachElement.type)
   domElement.innerHTML = reachElement.children 
   for (const prop in reachElement.props) {
    if (prop == 'children')continue;
    {
      domElement.setAttribute(prop,reachElement.props[prop])
        
    }
    container.appendChild(domElement)
   }
}
const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank',
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)