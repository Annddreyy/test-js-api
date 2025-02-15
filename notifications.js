// API уведомлений

let button = document.getElementById('button');
button.onclick = () => requestPermission();

function requestPermission() {
	Notification.requestPermission()
		.then((permission) => {
			console.log('Promise resolved: ' + permission);
		})
		.catch((error) => {
			console.log('Promise was rejected');
			console.log(error);
		});
}
