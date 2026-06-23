// ============================================
// Step 1: Get the elements we need from HTML
// document.getElementById finds an element
// by its id="..." attribute in the HTML
// ============================================
const shareBtn = document.getElementById('shareBtn');
const shareTooltip = document.getElementById('shareTooltip');


// ============================================
// Step 2: Listen for a click on the share button
//
// addEventListener('click', function) means:
// "when shareBtn is clicked, run this function"
// ============================================
shareBtn.addEventListener('click', function(event) {

  // event.stopPropagation() stops the click
  // from bubbling up to the document.
  // Without this, clicking the button would
  // ALSO trigger the document click listener
  // below and immediately close the tooltip
  event.stopPropagation();

  // Toggle means: if it has the class, remove it.
  // If it does not have the class, add it.
  // This is how one button opens AND closes the tooltip.
  shareTooltip.classList.toggle('active');
  shareBtn.classList.toggle('active');

});


// ============================================
// Step 3: Close tooltip when user clicks
// anywhere else on the page
//
// We listen on the whole document.
// If the click is NOT inside the tooltip
// or the button, we close it.
// ============================================
document.addEventListener('click', function(event) {

  // event.target = the element that was clicked
  // .contains() checks if shareTooltip
  // contains the clicked element inside it
  const clickedInsideTooltip = shareTooltip.contains(event.target);
  const clickedBtn = shareBtn.contains(event.target);

  // If user clicked outside both tooltip and button
  if (!clickedInsideTooltip && !clickedBtn) {

    // Remove active class from both
    // This hides the tooltip
    shareTooltip.classList.remove('active');
    shareBtn.classList.remove('active');
  }

});


// ============================================
// Step 4: Close tooltip when user presses
// the Escape key on keyboard
//
// This is good UX — users expect Escape
// to close popups
// ============================================
document.addEventListener('keydown', function(event) {

  // event.key gives us the name of the key pressed
  if (event.key === 'Escape') {
    shareTooltip.classList.remove('active');
    shareBtn.classList.remove('active');
  }

});