"use strict";(self.webpackChunkneo_mjs_realworld_example_app=self.webpackChunkneo_mjs_realworld_example_app||[]).push([[502],{502:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var s=t(74),o=t(227);class d extends s.Z{static getConfig(){return{className:"Neo.main.addon.MapboxGL",dataMap:{},downloadPath:"https://api.mapbox.com/mapbox-gl-js/",layers:{},maps:{},mapsToCreate:[],scriptsLoaded_:!1,singleton:!0,sources:{},remote:{app:["addLayers","addSources","autoResize","center","create","destroy","setFilter","setLayoutProperty","setPaintProperty","setStyle","updateData","zoom"]},styleMap:{},version:"v1.9.1",zoomMap:{}}}construct(e){super.construct(e),this.insertMapboxGLScripts()}addLayers(e){const a=this,t=a.maps[e.id];let s;t?e.layers.forEach((e=>{s=e.beforeId,delete e.beforeId,t.addLayer(e,s)})):a.layers[e.id]=Object.assign(a.layers[e.id]||{},e)}addSources(e){const a=this,t=a.maps[e.id];let s;t?e.sources.forEach((e=>{s=e.id,delete e.id,t.addSource(s,e)})):a.sources[e.id]=Object.assign(a.sources[e.id]||{},e)}afterSetScriptsLoaded(e,a){if(e){const e=this;e.mapsToCreate.forEach((a=>{e.create(a)})),e.mapsToCreate=[]}}applyStyleObject(e,a,t){t&&(this.styleMap[t]=a),a.layers.forEach((a=>{Object.entries(a.paint).forEach((([t,s])=>{e.setPaintProperty(a.id,t,s)}))}))}autoResize(e){const a=this.maps[e.id];a&&setTimeout((()=>{a.resize()}),100)}center(e){const a=this.maps[e.id],t={lat:e.lat,lng:e.lng};a&&(e.animate?a.flyTo({center:t}):a.setCenter(t))}create(e){const a=this;if(a.scriptsLoaded){mapboxgl.accessToken=e.accessToken;let t=e.zoom;a.zoomMap[e.id]&&(t=a.zoomMap[e.id].zoom,delete a.zoomMap[e.id]),a.maps[e.id]=new mapboxgl.Map({center:e.center,container:e.id,style:e.mapboxStyle,zoom:t}),a.maps[e.id].on("load",a.onMapLoaded.bind(a,e))}else a.mapsToCreate.push(e)}destroy(e){this.maps[e.id].remove(),delete this.maps[e.id]}hasMap(e){return!!this.maps[e]}insertMapboxGLScripts(){const e=this,a=e.downloadPath+e.version+"/";Promise.all([o.Z.loadScript(a+"mapbox-gl.js"),o.Z.loadStylesheet(a+"mapbox-gl.css")]).then((()=>{e.scriptsLoaded=!0}))}onMapLoaded(e,a){const t=this,s=e.id;e.sources?t.addSources({id:e.id,sources:e.sources}):t.sources[s]&&(t.addSources(t.sources[s]),delete t.sources[s]),e.layers?t.addLayers({id:e.id,layers:e.layers}):t.layers[s]&&(t.addLayers(t.layers[s]),delete t.layers[s]),a.target.loaded()?t.onMapReallyLoaded(e,a):a.target.once("idle",t.onMapReallyLoaded.bind(t,e))}onMapReallyLoaded(e,a){const t=this;setTimeout((()=>{e.data?t.updateData({data:e.data,dataSourceId:e.dataSourceId,id:e.id}):t.dataMap[e.id]&&t.updateData(t.dataMap[e.id])}),100)}setFilter(e){const a=this.maps[e.id];a&&a.setFilter(e.layerId,e.value,e.options||{})}setLayoutProperty(e){const a=this.maps[e.id];a&&a.setLayoutProperty(e.layerId,e.key,e.value,e.options||{})}setPaintProperty(e){const a=this.maps[e.id];a&&a.setPaintProperty(e.layerId,e.key,e.value,e.options||{})}setStyle(e){const a=this;a.scriptsLoaded&&a.hasMap(e.id)&&Neo.isString(e.style)&&(0===e.style.indexOf("mapbox://styles/")&&(e.style=e.style.substring(16)),a.styleMap[e.style]?a.applyStyleObject(a.maps[e.id],a.styleMap[e.style]):fetch(`https://api.mapbox.com/styles/v1/${e.style}?access_token=${e.accessToken}`).then((e=>e.json())).then((t=>a.applyStyleObject(a.maps[e.id],t,e.style))))}updateData(e){const a=this;if(a.scriptsLoaded&&a.hasMap(e.id)){const t=a.maps[e.id].getSource(e.dataSourceId);t?(t.setData(e.data),delete a.dataMap[e.id]):a.dataMap[e.id]=e}else a.dataMap[e.id]=e}zoom(e){const a=this.maps[e.id];a?a.setZoom(e.zoom):this.zoomMap[e.id]=e}}Neo.applyClassConfig(d);let r=Neo.create(d);Neo.applyToGlobalNs(r);const i=r}}]);