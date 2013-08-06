angular-directive-autoscroll
============================

Autoscroll an html element using and angular directive.

This directive is just a quick and dirty setup for scrolling an html element. Example usage below. This is an approxamation, I haven't actually tested this code.

In your app js file:

	// in your app
	angular.module('MyApp', ['directives.autoscroll'])
	
	.controller('AppController', function () {
		$scope.postMessage = function () {
			if (!$scope.messageTime && !$scope.newMessage.body) {
				return;
			}
			
			$scope.chatMessages.push($scope.newMessage.body);
			
    		$scope.newMessage.body = '';
		};
	});

In your html:

	<!-- in your html -->
	<div ng-model="chatContainer" class="chatContainer" autoscroll-down>
		<div ng-repeat="message in chatMessages">
		{{message}}
		</div>
	</div>
	<input type="text" name="messageTime" ng-model="newMessage.body" />
	<input type="button" name="postMessage" ng-click="postMessage()" />

