var Tab = (function(){

  function copyUrl() {
    var url = document.location.href;
		Clipboard.copy(url);
    CmdBox.set({ title : "[Copied] " + url, timeout : 4000 });
  }

  function reload(){
    location.reload();
  }

  function reloadAll() {
		Post({action: "Tab.reloadAll"});
	}

  function close(option) {
    option = option || {};
    option.action = 'Tab.close';
		Post(option);
  }

  function reopen() {
		Post({ action: "Tab.reopen", count: times() });
	}

  function togglePin() {
		Post({ action: "Tab.togglePin"});
  }

  function duplicate() {
    Post({ action: "Tab.duplicate", count: times() });
  }

  function detach() {
		Post({ action: "Tab.detach"});
  }

  function openInIncognito() {
		Post({ action: "Tab.openInIncognito"});
  }

  function merge() {
		Post({ action: "Tab.merge"});
  }

  function mergeAll() {
		Post({ action: "Tab.mergeAll"});
  }

  function selectPrevious() {
    var count = times(/*raw*/ true);

    if (count) {
      Post({ action: "Tab.goto", index: count - 1});
    } else {
      Post({ action: "Tab.selectPrevious" });
    }
  }

  function prev()  { Post({action: "Tab.goto",offset : -1 * times()}); }
  function next()  { Post({action: "Tab.goto",offset : times()}); }
  function first() { Post({action: "Tab.goto",index  :	0}); }
  function last()  { Post({action: "Tab.goto",index  : -1}); }

  // API
	return {
    copyUrl   : copyUrl	 ,
    reload    : reload   ,
    reloadAll : reloadAll,

    close     : close    ,
		closeAndFoucsLast : function(){ close({focusLast: true}); },
		closeAndFoucsLeft : function(){ close({offset: -1}); },
    closeOtherTabs    : function(){ close({closeOther: true}) },
    closeLeftTabs     : function(){ close({closeLeft: true}) },
    closeRightTabs    : function(){ close({closeRight: true}) },

    reopen    : reopen   ,

    prev      : prev     ,
    next      : next     ,
    first     : first    ,
    last      : last     ,
    selectPrevious : selectPrevious,

    togglePin       : togglePin,
    duplicate       : duplicate,
    detach          : detach,
    openInIncognito : openInIncognito,
    merge           : merge,
    mergeAll        : mergeAll
	};
})();
