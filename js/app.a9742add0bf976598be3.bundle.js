(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const n=a(377),{lightningChart:s,BarChartTypes:o,BarChartSorting:l,Themes:i}=n,r=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).BarChart({theme:i[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,type:o.Vertical}).setSorting(l.Disabled).setValueLabels(void 0);r.valueAxis.setTitle("Population (thousands)"),r.categoryAxis.setTitle("Age");const c=r.engine.container,d=document.createElement("input");c.append(d),r.setTitleMargin({top:25,bottom:-10}),d.type="range",d.min="1950",d.max="2021",d.value="1950",d.style.width="98%",c.style.textAlign="center",d.style.position="absolute",d.style.top="0",d.style.left="1%",d.addEventListener("input",(()=>{m=!1,h(d.value)})),d.addEventListener("change",(()=>{u=d.value,h(d.value)})),document.addEventListener("keydown",(e=>{" "===e.key&&(m=!m,m&&(2021==u&&(u=1950),p()))}));const h=e=>{r.setData(g[`${e}`]),r.setTitle(`${e}`)};let u=1950,m=!0;const p=()=>{m&&(d.value=u,h(u),u<2021?(u++,setTimeout((()=>p()),250)):m=!1)};let g;fetch(new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/1401/population.json").then((e=>e.json())).then((e=>{g=e,h(1950);const t=r.getBars(),a=t[0].getFillStyle();t.forEach((e=>{e.setFillStyle(a)})),setTimeout((()=>p()),1e3)}))}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);