<template lang="">
    <div>
        <section class="block">
            
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px);">
                <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                    <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </section>
    <section class="relative py-16">
        <div class="container mx-auto px-4">
<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <!----------------------------- IMAGE UPLOAD ------------------------------------------------------------------>
            <div class="w-25 px-9 flex justify-center">
                <div class="relative" v-if='form.path'>
                    <form @submit.prevent="upload">
                        <center>
                    <img alt="..." :src="form.path" class="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                    <br>
                    <br>
                    <br>
                    <label class="btn btn-info" >
                        <i class="fa fa-image"></i> Change profile<input type="file" v-on:change="onFileChange" id="file" style="display: none;" name="image">
                        </label>
                    <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Save it
                </button>
            </center>
            </form>
                </div>
                <div class="relative" v-else-if='details.image'>
                    <form @submit.prevent="upload">
                    <img alt="..." :src="details.image" class="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px">
                    <br>
                    <br>
                    <br>
                    <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Save it
                </button>
            </form>
                </div>
                    <div id="profile" v-else>
                        <div class="dashes" @click="selectFile()" v-on:change="onFileChange">
                                <input type="file" v-on:change="onFileChange" ref="file" class="file_upload" style="visibility: hidden;">
                            <center><span> Upload Image</span> </center>
                        </div>
                        
                    </div>
                </div>
                <!----------------------------- AGE UPLOAD ---------------------------------------------------------------------------->
                <div class="w-full px-4 text-center mt-20 font-bold uppercase">
                    <center><h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"> {{form.name}}</h3></center>
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                        
                        <!----------------------------- AGE FOUND ------------------------>
                        <div class="lg:mr-4 p-3 text-center" v-if="form.age">
                            <span v-if="isHidden" class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                {{form.age}} </span>
                            <span class="text-sm text-blueGray-400">Age</span>
                            <input class="ml-5 border border-primary rounded" v-if="!isHidden" v-model="age">
                                <button 
                                @click="todo"
                                 class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                >
                                <i v-if="isHidden">edit</i>
                                <i v-else>save</i>
                            </button>
                        </div>
                        
                        <!----------------------------- IF AGE NOT FOUND ------------------------>
                        <div class="lg:mr-4 p-3 text-center" v-else>
                            <form @submit.prevent="saveage">
                                <span class="text-sm text-blueGray-400">Age :</span>
                            <input
                                type="number"
                                placeholder="age"
                                v-model.lazy="details.age"
                                class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-15 ease-linear transition-all duration-150"
                            />
                            <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Add your age
                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!----------------------------- NAMES UPLOAD ---------------------------------------------------------------------------->
            <div class="text-center mt-12" >
                
                <div class="lg:mr-4 p-3 text-center" v-if="form.first && form.last"><h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    <span v-if="isHidden2">{{form.first}}{{ ' ' }}{{form.last}}</span>
                    <input class="ml-5 border border-primary rounded" v-if="!isHidden2" v-model="first">
                    <input class="ml-5 border border-primary rounded" v-if="!isHidden2" v-model="last">
                                <button 
                                @click="todonames"
                                 class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                >
                                <i v-if="isHidden2">edit</i>
                                <i v-else>save</i>
                            </button>
                </h3>
            </div>
            <div class="lg:mr-4 p-3 text-center font-bold uppercase" v-else>
                <form @submit.prevent="savenames"><span class="text-sm text-blueGray-400">First and Last name :</span>
                <input type="text" placeholder="First name" v-model.lazy="details.first" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-15 ease-linear transition-all duration-150"/>
                <input type="text" placeholder="Last name" v-model.lazy="details.last" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-15 ease-linear transition-all duration-150"/>
                <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Add your first and last name
                </button>
            </form>
                
            </div>
        
            <!----------------------------- ADRESSE UPLOAD ---------------------------------------------------------------------------->
            
            <div class="text-md leading-normal mt-4 mb-2 text-blueGray-600 font-bold uppercase" v-if="form.adresse">
                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    <span v-if="isHidden3">{{form.adresse}}</span>
                    <input class="ml-9 border border-primary rounded" v-if="!isHidden3" v-model="adresse">
                                <button 
                                @click="todoadresse"
                                 class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-2 py-1 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                >
                                <i v-if="isHidden3">edit</i>
                                <i v-else>save</i>
                            </button>
                </div>
                
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase" v-else>
                    <form @submit.prevent="saveadresse">
                        <span class="text-sm text-blueGray-400">Adresse :</span>
                        <input type="text" placeholder="Adresse" v-model.lazy="details.adresse" class="border-1 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-15 ease-linear transition-all duration-150"/>
                        <button
                            class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-3 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Add your Adresse
                        </button>
                    </form>
                   
            </div>  
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
</div>
</template>
<script>
import Form from 'vform'
import axios from "axios";
export default {
    data() {
        return {
    form: new Form({
                    id:'',
                    name : '',
                    email: '',
                    path:'',
                    created_at: '',
                    updated_at: '',
                    age:'',
                    first:'',
                    last:'',
                    adresse:'',
                }),
        details : new Form({
            first : '',
            last : '',
            adresse : '',
            age : '',
            image : '',
        }),
        isHidden: true,
        isHidden2: true,
        isHidden3: true,
        age: '',
        first : '',
        last : '',
        adresse : '',
        };

    },
    computed:{
    fullName: {
      get() {
        return `${this.first} ${this.last}`;
      },
    }
    },
    methods:{
        selectFile(){
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
        //-------------------------AGE EDIT----------------
        todo(){
            const hidden = this.isHidden; 
            if (hidden) {
        this.modifyTodo();
        this.isHidden = false;
      } else {
          this.resaveage();
        this.isHidden = true;
      }
        },
        //--------------------NAMES EDIT--------------------------------------------
        todonames(){
            const hidden = this.isHidden2; 
            if (hidden) {
        this.modifyTodoNames();
        this.isHidden2 = false;
      } else {
          this.resavenames();
        this.isHidden2 = true;
      }
        },
        //--------------------ADRESSEE EDIT--------------------------------------------
        todoadresse(){
            const hidden = this.isHidden3; 
            if (hidden) {
        this.modifyTodoAdresse();
        this.isHidden3 = false;
      } else {
          this.resaveadresse();
        this.isHidden3 = true;
      }
        },
        //-------------------CONTROLE THE EDIT---------------------------------------
        modifyTodo() {
            this.age = this.form.age;
    },
    modifyTodoNames() {
            this.first = this.form.first;
            this.last = this.form.last;
    },
    modifyTodoAdresse() {
            this.adresse = this.form.adresse;
    },
    //-----------------------SAVE THE NEW CHANGES---------------------------------------
    resaveage() {
        axios.post('/api/saveage',{age : this.age,iduser : this.form.id}).then(response => {this.$router.go()});
    },
    resavenames() {
        axios.post('/api/savenames',{first : this.first,iduser : this.form.id,last : this.last}).then(response => {this.$router.go()});
    },
    resaveadresse() {
        axios.post('/api/saveadresse',{adresse : this.adresse,iduser : this.form.id}).then(response => {this.$router.go()});
    },
    //------------------IMAGE CONTROL+PREVIEW---------------------------
        onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.details.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
        getUser() {
                axios.get("api/profile")
                .then(({ data }) => (this.form.fill(data)));
    },
    upload(){
            axios.post('/api/upload',{image: this.details.image, iduser : this.form.id}).then(response => {this.$router.go()});
    },
    saveage(){
        axios.post('/api/saveage',{age : this.details.age,iduser : this.form.id}).then(response => {this.$router.go()});
    },
    savenames(){
        axios.post('/api/savenames',{first : this.details.first,last : this.details.last,iduser : this.form.id}).then(response => {this.$router.go()});
    },
    saveadresse(){
        axios.post('/api/saveadresse',{adresse : this.details.adresse,iduser : this.form.id}).then(response => {this.$router.go()});
    }
    },
    created() {
            this.getUser();
        },

}
</script>
<style lang="">
    
</style>