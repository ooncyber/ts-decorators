// // factory CLASSE
// function Logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix}: `, target);
//     }
// }

// function log(target) {
//     console.log(target);
// }

// @Logger('ae')
// class Foo {

// }

// // decorator para anotar a vserao da api
// function setApiVersion(version:string){
//     return (constructor)=>{
//         return class extends constructor{
//             version = version;
//         }
//     }
// }

// @setApiVersion('1.0.0')
// class API{

// }

// console.log(`Variavel new API(): `, new API())

// PROPRIEDADE
// function minLength(length: number) {
//     return (target, key) => {
//         let val = target[key];

//         const getter = () => val;
//         const setter = (value) => {
//             if (value.length < length)
//                 console.log(`Erro, ${key} pequeno!`);
//             else
//                 val = value;
//         }
//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         })
//     }
// }

// class Movie {
//     // validar - se for menor q 5 não pode
//     @minLength(50)
//     title: string;


//     constructor(t: string) {
//         this.title = t;
//     }

// }
// const movie = new Movie('interestelar')

// console.log(`Variavel movie: `, movie)


// METODO CHAMADO
// function delay(ms: number) {
//     return (target, key, descriptor: PropertyDescriptor) => {
//         const originalMet = descriptor.value;
//         descriptor.value = function(...args)  {
//             console.log('Esperando ' + ms);
//             setTimeout(() => {
//                 originalMet.apply(this, args)
//             }, ms);
//         }

//     }
// }

// class Greeter {
//     greeting: string;
//     constructor(g: string) {
//         this.greeting = g;
//     }


//     @delay(1000)
//     greet() {
//         console.log(`Olá ${this.greeting}`);

//     }
// }


// const pessoinha = new Greeter("pessoinha")
// pessoinha.greet();