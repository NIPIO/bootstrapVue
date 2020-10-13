<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
		<div class="row">
			<b-form-group id="input-group-1" class="col-6" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
				<b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email">
				</b-form-input>
			</b-form-group>
			<b-form-group class="col-6">
				<label for="feedback-user">User ID</label>
				<b-input v-model="form.userId" :state="validation" id="feedback-user"></b-input>
					<b-form-invalid-feedback :state="validation">
						Your user ID must be 5-12 characters long.
					</b-form-invalid-feedback>
					<b-form-valid-feedback :state="validation">
						Looks Good.
					</b-form-valid-feedback>
			</b-form-group>
		</div>
		<div class="row">
	      <b-form-group id="input-group-2" class="col-6" label="Your Name:" label-for="input-2">
	        <b-form-input
	          id="input-2"
	          v-model="form.name"
	          required
	          placeholder="Enter name"
	        ></b-form-input>
	      </b-form-group>

	      <b-form-group id="input-group-3" class="col-6" label="Food:" label-for="input-3">
	        <b-form-select
	          id="input-3"
	          v-model="form.food"
	          :options="foods"
	          required
	        ></b-form-select>
	      </b-form-group>
		</div>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: [],
          userId: ''
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true,
        userId: ''
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    computed: {
      validation() {
        return this.form.userId.length > 4 && this.form.userId.length < 13
      }
  	}
  }
</script>