/**
 * Created by wisdom on 2017/12/6.
 */
import Vue from 'vue'
import Vuex from  'vuex'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        getList(state, list){
            state.list = list
        }
    },
    actions: {
        getListAction({commit}){
            //发送请求
            axios.get('https://cnodejs.org/api/v1/topics',
                {
                    params: {
                        page: 1,
                        limit: 10,
                        mdrender: 'false',
                    }
                })
                .then((data)=>{
                // console.log(data);
                    commit('getList',data.data.data)
            })
                .catch((error)=>{
                    console.log(error);
                })
        }
    }
})

export default store
