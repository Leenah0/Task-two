/* JS comes here */

		
var port;


document.querySelector('#start_button').addEventListener('click', async () => {
    // Prompt user to select any serial port.

    port = await navigator.serial.requestPort();
      
});