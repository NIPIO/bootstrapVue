<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'home'}">Home</b-nav-item>
            <b-nav-item :to="{name:'grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name:'cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name:'forms'}">Forms</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-container>
      <router-view/>
      </b-container>
    </div>
  </div>
</template>

<style>

</style>
