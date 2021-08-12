const Div = dom.create("<div>newDiv</div>")
console.log(Div)
dom.after(test,Div)
dom.before(test,Div)
const div1 = dom.create('<div id="parent"></div>')
dom.wrap(test,div1)


dom.attr(test, 'title', 'Hi, I am Carlos')
const title = dom.attr(test,'title')
console.log(`title: ${title}`)

dom.text(test,'你好，这是新的内容')
dom.text(test)

dom.style(test, {border: '1px solid red', color: 'blue'})
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')
dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'red'))
const fn = ()=> {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)
const testDiv = dom.find('#div>.red')[0] // 获取对应的元素
console.log(testDiv)
dom.style(div, 'color', 'red')
const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素
