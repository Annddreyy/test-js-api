// API уведомлений

let button = document.getElementById('button');
button.onclick = () => requestPermission();

window.onload = () => { showPermission(); };

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

function sendNotification() {
	let title = 'Test';
	let options = {
	  body: 'Test body',
	  // Other options can go here
	};
	console.log('Creating new notification');
	let notification = new Notification(title, options);
}

function showPermission() {
	let permission = Notification.permission;
	console.log('Notification permission is ' + permission);
	let p = document.getElementById('permission');
	p.textContent = 'Notification permission is ' + permission;
}

