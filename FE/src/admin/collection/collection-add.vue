<template>
    <div class="row add-product">
        <div class="col-sm-0 col-md-3 col-12 container-left">
            <Category />
        </div>

        <div class="col-sm-12 col-md-9 col-12">
            <p style="color: #0d6efd">Add new Collection</p>
            <p>Product > Collection</p>
             <div class="row product-striped">
                <div class="col">ID</div>
                <div class="col">Name</div>
             </div>
            <div v-for="item in collectionList" :key="item.id" class="row product-content">
                <div class="col">{{ item.id }}</div>
                <div class="col product-name">{{ item.name }}</div>
            </div>

            <form method="" class="product-form">
                 <div class="">
                    <label for="exampleFormControlInput1" class="form-label">Collection</label>
                    <input
                        type="email"
                        class="form-control"
                        id="collection"
                    />
                </div>


                <button @click="onSubmit" type="button" class="btn btn-outline-success">Add</button>

            </form>


        </div>
    </div>

</template>
<script>
    import axios from "axios"
    import Category from "@/admin/product/category.vue"
    export default {
        name: "CategoryAdd",
        components: {
            Category,
            
        },
        data(){
            return{
                collectionList: [],
            }
        },

        created() {
            axios.get("http://localhost:3000/collections")
            .then(function (response) {
                this.collectionList = response['data']['data']
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        
        methods: {
        onSubmit() {
            let collection = document.querySelector('#collection')['value']
            axios
                .put("http://localhost:3000/collections", {
                name: collection
                // image: this.FILE
                })
                .then((res) => {
                console.log(res);
                });

            alert("added to cart");
            location.reload();
            },
        }
    }
</script>
<style scoped>
div{
    color: black;
}
    .add-product {
        margin: 0 !important;
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0px;
        left: 0px !important;
        bottom: 0px;
        z-index: 100;
        background-color: white;
    }

    /* .product-form {

        background-color: white;
        height: 100vh;
        width: 100vw;
        margin: 0px;
        margin-top: 20px;
    } */
</style>