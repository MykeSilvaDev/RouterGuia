/*                Aula 285 Estrutura do Vue Router 
                  Aula 286 Como criar uma rota 
                  Aula 287 Aula 287 Componentes em rota 
                  Aula 289 Parâmetros 
                  Aula 290 Nested Routes*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
/*(1-285) IMPORTANDO O COMPONENTE ABOUT */
import About from '../views/AboutView.vue'
/*(4-287) IMPORTANDO O COMPONENTE CADASTRO.VUE */
import CadastroView from '../views/CadastroView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
/*(2-285) */
    component: About
  },
/*(3-286) (5-287) CRIANDO UMA NOVA ROTA */
  {
/*(5-289) DEFININDO PARÂMETRO /:dado */
    path: "/victor",
    name: 'Victor',
    component: CadastroView,
/*(6-290) ESTOU CRIANDO UMA ROTA FILHA */
    children: [
// NESSE ARRAY EU POSSO DEFINIR QUANTAS ROTAS EU QUISER
      {
// A ROTA LIMA SERÁ RESPONSÁVEL POR EXIBIR O COMPONENTE ABOUT
        path: "lima",
        name: "Lima",
        component: About

      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
