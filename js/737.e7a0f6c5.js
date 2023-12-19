(self["webpackChunkbudget_buddy"]=self["webpackChunkbudget_buddy"]||[]).push([[737],{7972:function(t,e,i){
/*!
  * Bootstrap modal.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(1884),i(4130),i(7317),i(632),i(9069),i(5160),i(1437),i(7547))})(0,(function(t,e,i,s,n,o,l,a){"use strict";const d="modal",r="bs.modal",c=`.${r}`,h=".data-api",m="Escape",u=`hide${c}`,_=`hidePrevented${c}`,p=`hidden${c}`,g=`show${c}`,b=`shown${c}`,f=`resize${c}`,v=`click.dismiss${c}`,w=`mousedown.dismiss${c}`,y=`keydown.dismiss${c}`,A=`click${c}${h}`,k="modal-open",E="fade",M="show",D="modal-static",x=".modal.show",T=".modal-dialog",C=".modal-body",$='[data-bs-toggle="modal"]',L={backdrop:!0,focus:!0,keyboard:!0},N={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class j extends t{constructor(t,e){super(t,e),this._dialog=i.findOne(T,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new a,this._addEventListeners()}static get Default(){return L}static get DefaultType(){return N}static get NAME(){return d}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const i=e.trigger(this._element,g,{relatedTarget:t});i.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(k),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,u);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(M),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){e.off(window,c),e.off(this._dialog,c),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new s({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new o({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=i.findOne(C,this._dialog);s&&(s.scrollTop=0),l.reflow(this._element),this._element.classList.add(M);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,b,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,y,(t=>{t.key===m&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),e.on(window,f,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),e.on(this._element,w,(t=>{e.one(this._element,v,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(k),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,p)}))}_isAnimated(){return this._element.classList.contains(E)}_triggerBackdropTransition(){const t=e.trigger(this._element,_);if(t.defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;"hidden"===s||this._element.classList.contains(D)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(D),this._queueCallback((()=>{this._element.classList.remove(D),this._queueCallback((()=>{this._element.style.overflowY=s}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=l.isRTL()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=l.isRTL()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=j.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return e.on(document,A,$,(function(t){const s=i.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),e.one(s,g,(t=>{t.defaultPrevented||e.one(s,p,(()=>{l.isVisible(this)&&this.focus()}))}));const n=i.findOne(x);n&&j.getInstance(n).hide();const o=j.getOrCreateInstance(s);o.toggle(this)})),n.enableDismissTrigger(j),l.defineJQueryPlugin(j),j}))},632:function(t,e,i){
/*!
  * Bootstrap backdrop.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4130),i(2166),i(1437))})(0,(function(t,e,i){"use strict";const s="backdrop",n="fade",o="show",l=`mousedown.bs.${s}`,a={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},d={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class r extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return a}static get DefaultType(){return d}static get NAME(){return s}show(t){if(!this._config.isVisible)return void i.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&i.reflow(e),e.classList.add(o),this._emulateAnimation((()=>{i.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(o),this._emulateAnimation((()=>{this.dispose(),i.execute(t)}))):i.execute(t)}dispose(){this._isAppended&&(t.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(n),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=i.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,l,(()=>{i.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){i.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return r}))},5160:function(t,e,i){
/*!
  * Bootstrap focustrap.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4130),i(7317),i(2166))})(0,(function(t,e,i){"use strict";const s="focustrap",n="bs.focustrap",o=`.${n}`,l=`focusin${o}`,a=`keydown.tab${o}`,d="Tab",r="forward",c="backward",h={autofocus:!0,trapElement:null},m={autofocus:"boolean",trapElement:"element"};class u extends i{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return h}static get DefaultType(){return m}static get NAME(){return s}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,o),t.on(document,l,(t=>this._handleFocusin(t))),t.on(document,a,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,o))}_handleFocusin(t){const{trapElement:i}=this._config;if(t.target===document||t.target===i||i.contains(t.target))return;const s=e.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===c?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===d&&(this._lastTabNavDirection=t.shiftKey?c:r)}}return u}))},7547:function(t,e,i){
/*!
  * Bootstrap scrollbar.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(6221),i(7317),i(1437))})(0,(function(t,e,i){"use strict";const s=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n=".sticky-top",o="padding-right",l="margin-right";class a{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,o,(e=>e+t)),this._setElementAttributes(s,o,(e=>e+t)),this._setElementAttributes(n,l,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,o),this._resetElementAttributes(s,o),this._resetElementAttributes(n,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)};this._applyManipulationCallback(t,n)}_saveInitialAttribute(e,i){const s=e.style.getPropertyValue(i);s&&t.setDataAttribute(e,i,s)}_resetElementAttributes(e,i){const s=e=>{const s=t.getDataAttribute(e,i);null!==s?(t.removeDataAttribute(e,i),e.style.setProperty(i,s)):e.style.removeProperty(i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(t,s){if(i.isElement(t))s(t);else for(const i of e.find(t,this._element))s(i)}}return a}))},1737:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Q}});var s=i(3396),n=i(7139);const o={class:"p-5 row justify-content-center justify-content-md-start"},l={class:"card-img"},a=["src"],d={class:"title d-flex justify-content-center align-items-center"},r={class:"card-title m-0"},c={class:"edit-delete d-flex justify-content-end align-items-start"},h=(0,s._)("i",{class:"bi bi-pencil"},null,-1),m=[h],u=(0,s._)("i",{class:"bi bi-trash"},null,-1),_=[u],p={class:"card-body overflow-scroll"},g={class:"card-text"},b=(0,s._)("i",{class:"bi bi-plus"},null,-1),f=[b];function v(t,e,i,h,u,b){const v=(0,s.up)("LedgerModal"),w=(0,s.up)("DeleteModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.ledgers,((t,i)=>((0,s.wg)(),(0,s.iD)("div",{class:"card col-12 col-md-3 me-3 mb-3 p-0",key:"ledger"+i},[(0,s._)("div",l,[(0,s._)("img",{src:t.img,alt:"..."},null,8,a),(0,s._)("div",d,[(0,s._)("h5",r,(0,n.zw)(t.name),1)]),(0,s._)("div",c,[(0,s._)("button",{class:"btn text-white",onClick:e[0]||(e[0]=(...t)=>b.openModal&&b.openModal(...t))},m),(0,s._)("button",{class:"btn text-danger",onClick:e[1]||(e[1]=(...t)=>b.openDeleteModal&&b.openDeleteModal(...t))},_)])]),(0,s._)("div",p,[(0,s._)("p",g,(0,n.zw)(t.content),1)])])))),128)),(0,s._)("button",{class:"add-ledger-btn",onClick:e[2]||(e[2]=(...t)=>b.openModal&&b.openModal(...t))},f)]),(0,s.Wm)(v,{ref:"ledgerModal"},null,512),(0,s.Wm)(w,{ref:"deleteModal"},null,512)],64)}const w={class:"modal ledger-modal",tabindex:"-1",ref:"modal"},y={class:"modal-dialog modal-lg modal-dialog-centered"},A={class:"modal-content"},k=(0,s.uE)('<div class="modal-header"><h5 class="modal-title">新增帳簿</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><div class="row"><div class="col-md-6"><div class="mb-3"><label for="name" class="form-label">帳簿名稱</label><input type="text" class="form-control" id="name"></div><div class="mb-3"><label for="currency" class="form-label">幣別</label><select class="form-select" aria-label="Default select example"><option selected>幣別</option><option value="NTD">台幣</option><option value="USD">美金</option></select></div><div class="mb-3"><label for="describe" class="form-label">帳簿描述</label><textarea class="form-control" id="describe" rows="3"></textarea></div></div><div class="col-md-6"><div class="mb-3"><label for="uploadImg" class="form-label">帳簿封面</label><input class="form-control" type="file" id="uploadImg"></div></div></div></div>',2),E={class:"modal-footer"},M=(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function D(t,e,i,n,o,l){return(0,s.wg)(),(0,s.iD)("div",w,[(0,s._)("div",y,[(0,s._)("div",A,[k,(0,s._)("div",E,[M,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(...t)=>l.hideModal&&l.hideModal(...t))},"新增")])])])],512)}var x=i(7972),T=i.n(x),C={data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(T())(this.$refs.modal)}},$=i(89);const L=(0,$.Z)(C,[["render",D]]);var N=L,j=i(9242);const P={class:"modal",tabindex:"-1",ref:"modal"},W={class:"modal-dialog modal-dialog-centered"},B={class:"modal-content"},S={class:"modal-header bg-danger text-white"},z={class:"modal-title"},I=["disabled"],O={class:"modal-body"},F={class:"modal-footer"},V=["disabled"];function q(t,e,i,o,l,a){return(0,s.wg)(),(0,s.iD)("div",P,[(0,s._)("div",W,[(0,s._)("div",B,[(0,s._)("div",S,[(0,s._)("h5",z,"是否刪除 "+(0,n.zw)(t.title),1),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",disabled:t.btnDisabled},null,8,I)]),(0,s._)("div",O,[(0,s._)("p",null,"確定要刪除 "+(0,n.zw)(t.title)+" 嗎？（刪除後無法恢復）",1)]),(0,s._)("div",F,[(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",disabled:t.btnDisabled}," 取消 ",8,V),(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(0,j.iM)(((...t)=>a.hideModal&&a.hideModal(...t)),["prevent"]))},"確認刪除")])])])],512)}var H={data(){return{modal:{}}},methods:{showModal(){this.btnDisabled=!1,this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(T())(this.$refs.modal)}};const R=(0,$.Z)(H,[["render",q]]);var Y=R,K={data(){return{ledgers:[{name:"first",content:"第一本",img:"https://picsum.photos/215"},{name:"second",content:"第二本",img:"https://picsum.photos/215"},{name:"third",content:"第三本",img:"https://picsum.photos/215"},{name:"first",content:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores quidem sequi nisi nam cum accusamus alias repellendus natus tempora vitae ad voluptate, rem tenetur a numquam iusto beatae blanditiis.",img:"https://picsum.photos/215"},{name:"second",content:"第二本",img:"https://picsum.photos/215"},{name:"third",content:"第三本",img:"https://picsum.photos/215"}]}},components:{LedgerModal:N,DeleteModal:Y},methods:{openModal(){this.$refs.ledgerModal.showModal()},openDeleteModal(){this.$refs.deleteModal.showModal()}}};const Z=(0,$.Z)(K,[["render",v]]);var Q=Z}}]);
//# sourceMappingURL=737.e7a0f6c5.js.map