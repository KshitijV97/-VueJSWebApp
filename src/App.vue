<template>
  <div id="app">
		<Header title="My Profile" />
		<Profile :user="user"/> 
  </div>
</template>

<script>
	import Header from './components/Header.vue';
	import Profile from './components/Profile.vue';

export default {
		name: 'app',
		components: {
			Header,
			Profile
		},
		data: function(){
			return{
				user:{
					name: "Kshitij",
					image: require("./assets/kshitij.jpg")
				}
			}
		}

}
</script>

<style>
body{
	margin: 0;
	background: #F3F3F3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
