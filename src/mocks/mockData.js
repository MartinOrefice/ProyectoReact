const productos = [

    {id: '01', nombre:'Producto1', categoria:'promociones', stock:'5' ,precio: '2000', descripcion:'Descripcion1', img:'https://picsum.photos/200' },

    {id: '02', nombre:'Producto2', categoria:'promociones', stock:'10' ,precio: '3000', descripcion:'Descripcion2', img:'https://picsum.photos/201' },

    {id: '03', nombre:'Producto3', categoria:'nuevos', stock:'3' ,precio: '4000', descripcion:'Descripcion3', img:'https://picsum.photos/202' },

    {id: '04', nombre:'Producto4', categoria:'nuevos', stock:'8' ,precio: '7000', descripcion:'Descripcion4', img:'https://picsum.photos/203' },

    {id: '05', nombre:'Producto5', categoria:'nuevos', stock:'5' ,precio: '3000', descripcion:'Descripcion5', img:'https://picsum.photos/204' },

    {id: '06', nombre:'Producto6', categoria:'usados', stock:'1' ,precio: '5000', descripcion:'Descripcion6', img:'https://picsum.photos/205' },

]



export const getProducts = new Promise((resolve, reject)=>{

  let condition = true
  setTimeout(()=> {
    if(condition){
      resolve(productos)
    }else{
      reject('salio mal :( no hay sushi')
    }

  },2000)

})