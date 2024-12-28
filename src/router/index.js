import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpotifyClone from '@/components/SpotifyClone.vue'
import Test from '@/components/test.vue'
import Search from '@/components/Search.vue'
import PlaylistSection from '@/components/PlaylistSection.vue'
import Library from '@/components/library.vue'
import MyArtists from '@/components/MyArtists.vue'
import Login from '@/components/Login.vue'
import SearchResults from '@/components/SearchResults.vue'
import UserProfile from '@/components/UserProfile.vue'

import RegisterPage from '@/components/RegisterPage.vue'
import ArtistDetail from '@/components/ArtistDetail.vue'

Vue.use(VueRouter)



const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'Spotify',
    component: SpotifyClone
  },
  {
    path: '/search',
    name: 'SearchResults',
    component: SearchResults
  },
  {
  path: '/playlistSection',
  name: 'PlaylistSection',
  component: PlaylistSection
  },
{
  path: '/library',
  name: 'Library',
  component: Library
},
{
  path: '/myartists',
  name: 'MyArtists',
  component: MyArtists
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
{
  path: '/userprofile',
  name: 'UserProfile',
  component: UserProfile
},
{
  path: '/register',
  name: 'RegisterPage',
  component: RegisterPage
},
{
  path: '/artist/:id',
  name: 'ArtistDetail',
  component: ArtistDetail
},

  // {
  //   path: '/',
  //   name: 'Test',
  //   component: Test
  // }

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
