"use strict";(self["webpackChunkbudget_buddy"]=self["webpackChunkbudget_buddy"]||[]).push([[507],{507:function(e,t,l){l.r(t),l.d(t,{default:function(){return X}});var d=l(3396),s=l(7139);const a={class:"p-5 row justify-content-center justify-content-md-start"},o={class:"card-img"},i=["src"],n={class:"title d-flex justify-content-center align-items-center"},r={class:"card-title m-0"},c={class:"card-body overflow-scroll"},m={class:"card-text"},g={class:"edit-delete d-flex justify-content-end align-items-start"},p=["onClick"],u=(0,d._)("i",{class:"bi bi-pencil"},null,-1),h=[u],b=["onClick"],_=(0,d._)("i",{class:"bi bi-trash"},null,-1),f=[_],w=(0,d._)("i",{class:"bi bi-plus"},null,-1),L=[w];function v(e,t,l,u,_,w){const v=(0,d.up)("Loading"),y=(0,d.up)("router-link"),M=(0,d.up)("LedgerModal"),k=(0,d.up)("DeleteModal");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(v,{active:_.isLoading,style:{"z-index":"9999"}},null,8,["active"]),(0,d._)("div",a,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(_.ledgers,((e,t)=>((0,d.wg)(),(0,d.iD)("div",{class:"card col-12 col-md-3 me-3 mb-3 p-0",key:"ledger"+t},[(0,d._)("div",o,[(0,d.Wm)(y,{to:"/dashboard/ledger/"+e._id},{default:(0,d.w5)((()=>[(0,d._)("img",{src:e.image,alt:"帳簿封面"},null,8,i),(0,d._)("div",n,[(0,d._)("h5",r,(0,s.zw)(e.name),1)]),(0,d._)("div",c,[(0,d._)("p",m,(0,s.zw)(e.description),1)])])),_:2},1032,["to"]),(0,d._)("div",g,[(0,d._)("button",{class:"btn text-white",onClick:t=>w.openModal(!1,e)},h,8,p),(0,d._)("button",{class:"btn text-danger",onClick:t=>w.openDeleteModal(e)},f,8,b)])])])))),128)),(0,d._)("button",{class:"add-ledger-btn",onClick:t[0]||(t[0]=e=>w.openModal(!0))},L)]),(0,d.Wm)(M,{ref:"ledgerModal",ledger:_.tempLedger,onUpdateLedger:w.updateLedger},null,8,["ledger","onUpdateLedger"]),(0,d.Wm)(k,{ref:"deleteModal",name:_.tempLedger.name,onDeleteItem:w.deleteLedger},null,8,["name","onDeleteItem"])],64)}var y=l(9242);const M={class:"modal ledger-modal",tabindex:"-1",ref:"modal"},k={class:"modal-dialog modal-lg modal-dialog-centered"},D={class:"modal-content"},x=(0,d._)("div",{class:"modal-header"},[(0,d._)("h5",{class:"modal-title"},"新增帳簿"),(0,d._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body"},C={class:"row"},U={class:"col-md-6"},I={class:"mb-3"},j=(0,d._)("label",{for:"name",class:"form-label"},"帳簿名稱",-1),N=(0,d.uE)('<div class="mb-3"><label for="currency" class="form-label">幣別</label><select class="form-select" aria-label="Default select example"><option selected>幣別</option><option value="NTD">台幣</option><option value="USD">美金</option></select></div>',1),W={class:"mb-3"},z=(0,d._)("label",{for:"describe",class:"form-label"},"帳簿描述",-1),V={class:"col-md-6"},Z={class:"mb-3"},H=(0,d._)("label",{for:"uploadImg",class:"form-label"},"帳簿封面",-1),Y=(0,d._)("input",{type:"file",class:"form-control",id:"uploadImg"},null,-1),q={key:0,class:"mt-2"},E=["src"],K={class:"modal-footer"},S=(0,d._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function T(e,t,l,s,a,o){return(0,d.wg)(),(0,d.iD)("div",M,[(0,d._)("div",k,[(0,d._)("div",D,[x,(0,d._)("div",$,[(0,d._)("div",C,[(0,d._)("div",U,[(0,d._)("div",I,[j,(0,d.wy)((0,d._)("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>a.tempLedger.name=e)},null,512),[[y.nr,a.tempLedger.name]])]),N,(0,d._)("div",W,[z,(0,d.wy)((0,d._)("textarea",{class:"form-control",id:"describe",rows:"3","onUpdate:modelValue":t[1]||(t[1]=e=>a.tempLedger.description=e)},null,512),[[y.nr,a.tempLedger.description]])])]),(0,d._)("div",V,[(0,d._)("div",Z,[H,Y,(0,d.wy)((0,d._)("input",{type:"text",class:"form-control mt-2","onUpdate:modelValue":t[2]||(t[2]=e=>a.tempLedger.image=e)},null,512),[[y.nr,a.tempLedger.image]]),a.tempLedger.image?((0,d.wg)(),(0,d.iD)("div",q,[(0,d._)("img",{src:a.tempLedger.image,alt:"帳簿封面",width:"200"},null,8,E)])):(0,d.kq)("",!0)])])])]),(0,d._)("div",K,[S,(0,d._)("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=t=>e.$emit("update-ledger",a.tempLedger))},"新增")])])])],512)}var A=l(7972),B=l.n(A),F={props:{ledger:{}},data(){return{modal:{},tempLedger:{}}},watch:{ledger(){this.tempLedger=this.ledger}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(B())(this.$refs.modal)}},G=l(89);const J=(0,G.Z)(F,[["render",T]]);var O=J,P=l(4010),Q={data(){return{ledgers:[],tempLedger:{},isNew:!1,isLoading:!1}},components:{LedgerModal:O,DeleteModal:P.Z},methods:{getLedgers(){const e="https://wide-eyed-sneakers-newt.cyclic.app/api/ledger";this.$http.get(e).then((e=>{console.log("ledger:",e.data),this.ledgers=e.data}))},openModal(e,t){this.tempLedger=e?{}:{...t},this.isNew=e,this.$refs.ledgerModal.showModal()},updateLedger(e){this.isLoading=!0;let t="https://wide-eyed-sneakers-newt.cyclic.app/api/ledger/create",l="post",d=e;this.isNew||(t="https://wide-eyed-sneakers-newt.cyclic.app/api/ledger/update",l="patch",d={ledgerId:e._id,name:e.name,image:e.image,description:e.description}),this.$http[l](t,d).then((e=>{this.isLoading=!1,console.log(e),this.$refs.ledgerModal.hideModal(),this.getLedgers()}))},openDeleteModal(e){this.tempLedger={...e},this.$refs.deleteModal.showModal()},deleteLedger(){this.isLoading=!0;const e=`https://wide-eyed-sneakers-newt.cyclic.app/api/ledger/delete/${this.tempLedger._id}`;this.$http.delete(e).then((e=>{this.isLoading=!1,console.log(e.data),this.$refs.deleteModal.hideModal(),this.getLedgers()}))}},created(){this.getLedgers()}};const R=(0,G.Z)(Q,[["render",v]]);var X=R}}]);
//# sourceMappingURL=507.3b327ebd.js.map