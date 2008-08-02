function toggleLinkText() {
  // console.log("toggleLinkText");
  if(Element.visible('hidden-block')){
    $('block-open-link').innerHTML = "Click again to close";
  }
  else {
    $('block-open-link').innerHTML = "Click this";
  }
}

function toggleElement(item) {
  if(Element.visible(item)) {
    item.hide();
  }
  else {
    item.show();
  }
}

function toggleBlocks(element) {
  // console.log("Elements with %s should toggle", element);
  if($(element)){
    // console.log("%s is an id", element);
    Effect.toggle(element, 'appear', {afterFinish: toggleLinkText});
    // console.log("%s should have toggled", element);
  }
  else {
    // console.log("%s is a class");
    selector = ".#{element}".interpolate({element: element});
    elements_array = $$(selector);
    // console.log("%s", elements_array);
    elements_array.each(
        function(item) {
        // console.log("Toggling %s", item);
        // Effect.toggle(item, 'appear', {afterFinish: toggleLinkText} );
        // Commented out because toggle only worked on first section. Using different strategy.
        toggleElement(item);
        if(Element.visible('ruby-section')) {
        $('hide-section-bodies-link').innerHTML = "Click to hide all section bodies (<small>except this one</small>)" 
        }
        else {
        $('hide-section-bodies-link').innerHTML = "Click to show hidden section bodies" 
        }
        }
        )
  }
}

function updateWithTime (container) {
  // console.log("Element to be updated is %s", container);
  // console.log("Container is %s", $(container));
  new Ajax.Updater(container, '/get-time.php');
}
