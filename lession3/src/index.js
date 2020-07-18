// import _ from 'lodash';
// console.log(_.join(['a', 'b', 'c']))


async function getComponent() {
  const { default: _} = await import(/* webpackChunkName:'loadsh'*/'lodash');
  const element = document.createElement('div')
  element.innerHTML = _.join(['xiao', 'lee'])
  // return import(/* webpackChunkName:'loadsh'*/'lodash').then(({default: _}) => {
  //   var element = document.createElement('div')
  //   element.innerHTML = _.join(['xiao', 'lee'])
  //   return element
  // })
  return element
}

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element)
  })
})

