(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[106],{Tt3L:function(e,t,n){"use strict";var i=n("hhPA"),r=n.n(i),c=n("Nd0X"),o=n("JoHf"),u=n("T99f"),a=n("+IkO"),h=n("NaN6"),s=n("OQ3T"),d=r.a.createStore({init:function init(){this.listenToMany(c.a),this.listenTo(o.a.restore.completed,this.onReset)},checkpointsRunning:function checkpointsRunning(){return Object(a.h)(this.redux.getState())},currentCheckpointIndex:function currentCheckpointIndex(){return Object(a.j)(this.redux.getState())},checkpointCount:function checkpointCount(){return Object(h.j)(this.redux.getState()).checkpoints.length},onReset:function onReset(){this.redux.dispatch(Object(u.f)()),this.redux.dispatch(Object(s.c)())},onRun:function onRun(){this.redux?this.redux.dispatch(Object(u.h)()):c.a.run.completed()},onSaveReduxReference:function onSaveReduxReference(e){var t=e.dispatch,n=e.getState;this.redux={},this.redux.dispatch=t,this.redux.getState=n},onSaveTerminalReference:function onSaveTerminalReference(e){this.terminalComponent=e},getActiveTerminal:function getActiveTerminal(){var e=this.terminalComponent&&this.terminalComponent.getActiveTerminal();if(e)return e;var t=function testerNoop(){return!1};return{ranOneOfWithExitCode:t,didRunCommand:t,didRunOneOf:t}}});t.a=d}}]);
//# sourceMappingURL=106.762e9055adc496ef4f12.chunk.js.map