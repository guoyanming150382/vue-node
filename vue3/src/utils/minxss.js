const pageMinix={
    data(){
        return{
            minArry:[],
            minArrary:[
                {name:66,old:"asda"},
                {name:66,old:"asda"},
                {name:66,old:"asda"}
            ],
            minNum:98,
            minHEF:"孝直"
        }
    },
    methods:{
        minName(){
            console.log( "法正 字 "+this.minHEF)
        },
        minGuan(){
            console.log("随时",this.minNum)
        }
    },
    created(){
        this.minGuan()
    }
}

export default {
    pageMinix
}