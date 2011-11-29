(function() {
   // Load plugin specific language pack
   tinymce.PluginManager.requireLangPack('example');

   tinymce.create('gng.TinyLinkPlugin', {
      /**
      * Initializes the plugin, this will be executed after the plugin has been created.
      * This call is done before the editor instance has finished it's initialization so use the onInit event
      * of the editor instance to intercept that event.
      *
      * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
      * @param {string} url Absolute URL to where the plugin is located.
      */
      init : function(ed, url) {
         // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
         ed.addCommand('addAnchor', function() {
            console.log("Executing in the addcomment event.");
            var selEditor = ed.selection;
            var selectedText = selEditor.getContent({format: 'html'});
            console.log("Selected: " + selectedText );
            selectedText = '<a href="#foo">' + selectedText + '</a>';
            console.log("New Value: " + selectedText)
            selEditor.setContent(selectedText);
         });

         ed.addCommand('remAnchor', function() {
            console.log("Executing in the remanchor event.");
            var selEditor = ed.selection;
            var selectedText = selEditor.getContent({format: 'html'});
            console.log("Selected 2: " + tinyMCE.activeEditor.selection.getNode().innerHtml );
            //console.log("Selected: " + selectedText );
         });

         // Register example button
         ed.addButton('addLinkButton', {
            title : 'Wrap text in an anchor.',
            cmd : 'addAnchor',
            image : './img/justified.jpg'
         });

         // Register example button
         ed.addButton('remLinkButton', {
            title : 'Remove the anchor in a given text if it exists..',
            cmd : 'remAnchor',
            image : './img/justified.jpg'
         });

         // Add a node change handler, selects the button in the UI when a image is selected
         ed.onNodeChange.add(function(ed, cm, n) {
            cm.setActive('addLinkButton', n.nodeName == 'IMG');
            cm.setActive('remLinkButton', n.nodeName == 'IMG');
         });
      },
      /**
      * Returns information about the plugin as a name/value array.
      * The current keys are longname, author, authorurl, infourl and version.
      *
      * @return {Object} Name/value array containing information about the plugin.
      */
      getInfo : function() {
         return {
            longname : 'TinyMCE Link creator Plugin',
            author : 'John Bateman',
            authorurl : 'www.graveandguns.com',
            infourl : '',
            version : "1.0"
            };
         }
      });

   // Register plugin
   tinymce.PluginManager.add('tinylink', gng.TinyLinkPlugin);
})();