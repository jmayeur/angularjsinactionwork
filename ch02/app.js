
(function(angular){
    'use strict';
    var angelloModule = angular.module('Angello', []);

    angelloModule.controller('MainCtrl', function($scope, angelloModel) {


        $scope.statuses = angelloModel.getStatuses();
        $scope.types = angelloModel.getTypes();
        $scope.stories = angelloModel.getStories();
        $scope.currentStory = null;

        $scope.setCurrentStory = function(story) {
            $scope.currentStory = story;
        };

        $scope.createStory = function() {
            $scope.stories.push({title:'New Story',
                description:'Description pending.',
                criteria:'Criteria pending.',
                status:'Back Log',
                type:'Feature',
                reporter:'Pending',
                assignee:'Pending'
            });
        };
    });

    angelloModule.factory('angelloModel', function(){
        var statuses = [
            {name:'Back Log'},
            {name:'To Do'},
            {name:'In Progress'},
            {name:'Code Review'},
            {name:'QA Review'},
            {name:'Verified'},
            {name:'Done'}
        ];

        var types = [
                {name:'Feature'},
                {name:'Enhancement'},
                {name:'Bug'},
                {name:'Spike'}
        ];

        var getStories = function(){
            var tempArray = [
                {title:'Story 00', description:'Description pending.', criteria:'Criteria pending.', status:statuses[1], type:types[0], reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
                {title:'Story 01', description:'Description pending.', criteria:'Criteria pending.', status:statuses[0], type:types[0], reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
                {title:'Story 02', description:'Description pending.', criteria:'Criteria pending.', status:statuses[3], type:types[1], reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
                {title:'Story 03', description:'Description pending.', criteria:'Criteria pending.', status:statuses[6], type:types[1], reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
                {title:'Story 04', description:'Description pending.', criteria:'Criteria pending.', status:statuses[5], type:types[2], reporter:'Lukas Ruebbelke', assignee:'Brian Ford'},
                {title:'Story 05', description:'Description pending.', criteria:'Criteria pending.', status:statuses[1], type:types[3], reporter:'Lukas Ruebbelke', assignee:'Brian Ford'}
            ];
            return tempArray;
        };

        return {
            getStatuses: function(){ return statuses; },
            getTypes: function(){ return types; },
            getStories: getStories
        };
    });

//noinspection JSUnresolvedVariable
}(angular));

