import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex);

export let store = new Vuex.Store({
  state: {
      이름: 'John',
      나이: 20,
  },
  getters : {
    //   꺼내쓰는법
    이름꺼내기(state){
        return state.이름
    }
  },
  mutations: {
    //   데이터수정하는법
    나이에한살더하기( state ){
        state.나이++
    },
    이름바꾸기(state,데이터) {
        state.이름 = 데이터
    }
  },
//   redux:{},
  actions : {
      이름바꾸기(context) {
          Axios.get().then(결과=> {
            context.commit('이름바꾸기', 결과)
          })
      }
    //   axios.get().then(결과=>{
    //       이름바꾸기()를 commit
    //   })
    //   이름바꾸기()를 commit(실행해주세요)
    //   1. ajax 요청을 통해서 뭔가 mutations를 해야하는 경우

  }
  
})