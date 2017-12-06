/**
 * Created by wisdom on 2017/12/6.
 */
import Vue from 'vue'
import Vuex from  'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: [],
        loading: true
    },
    mutations: {
        getList(state, {list,loading}){
            state.list = list
            state.loading = loading
        }
    },
    actions: {

        getListAction({commit},{page,limit}){
            //发送请求
            setTimeout(()=>{
                axios.get('https://cnodejs.org/api/v1/topics',
                    {
                        params: {
                            page: page,
                            limit: limit,
                            mdrender: 'false',
                        }
                    })
                    .then((data)=>{
                        // console.log(data);
                        commit('getList',{list:data.data.data,loading:false})
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
            },1000)

        }
    }
})

export default store
