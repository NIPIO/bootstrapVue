<template>
  <div class="mt-5">
  	<b-row class="mt-5"  cols="3" md="12" lg="6">
  	  <b-button variant="success">Button</b-button>
  	  <b-button variant="warning">Button</b-button>
  	  <b-button variant="info">Button</b-button>
  	  <b-button variant="primary">Button</b-button>
  	  <b-button variant="dark">Button</b-button>
  	  <b-button variant="danger">Button</b-button>
  	</b-row>
  	<b-row class="mt-5" cols="6" md="12" lg="6" >
  	  <b-button variant="outline-success">Button</b-button>
	  <b-button variant="outline-warning">Button</b-button>
	  <b-button variant="outline-info">Button</b-button>
	  <b-button variant="outline-primary">Button</b-button>
	  <b-button variant="outline-dark">Button</b-button>
	  <b-button variant="outline-danger">Button</b-button>
  	</b-row>
  	<br>
  	<br>
  	<br>
  	<b-row class="my-2 " cols="12">
		<div>
			<b-card
			title="Card Title"
			img-src="https://picsum.photos/600/300/?image=25"
			style="max-width: 20rem;"
			class="m-2"
			>
			<b-card-text>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui reprehenderit a repellat ipsum, repellendus corporis. Vitae quos saepe amet, voluptate repellat exercitationem ipsum nesciunt, eum excepturi aperiam? Minus doloremque, delectus?</p>
			</b-card-text>

			<b-button href="/grid" variant="outline-info">Go Grid</b-button>
			</b-card>
		</div>
		<div>
			<b-card
			title="Card Title"
			img-src="https://picsum.photos/600/300/?image=25"
			style="max-width: 20rem;"
			class="m-2"
			>
			<b-card-text>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui reprehenderit a repellat ipsum, repellendus corporis. Vitae quos saepe amet, voluptate repellat exercitationem ipsum nesciunt, eum excepturi aperiam? Minus doloremque, delectus?</p>
			</b-card-text>

			<b-button href="/" variant="outline-danger">Go Home</b-button>
			</b-card>
		</div>
  	</b-row>

  </div>
</template>

<script>
export default {
  name: 'Cards',
  components: {
  }
}
</script>
