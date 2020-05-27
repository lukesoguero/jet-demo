/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define([
  'ojs/ojresponsiveutils',
  'ojs/ojresponsiveknockoututils',
  'knockout',
  'ojs/ojarraydataprovider',
  'ojs/ojknockout',
  'ojs/ojselectsingle',
  'ojs/ojselectcombobox',
  'ojs/ojnavigationlist',
  'ojs/ojformlayout',
  'ojs/ojbutton',
  'ojs/ojlabel',
  'ojs/ojradioset',
  'ojs/ojcheckboxset'
],
  function(ResponsiveUtils, ResponsiveKnockoutUtils, ko, ArrayDataProvider) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("Demo App");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.hancock@oracle.com");

      // Body
      self.selectedItem = ko.observable("policy");
      var names = [
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
        { value: 'other', label: 'Other' }
      ];
      self.attributeNames = new ArrayDataProvider(names, { keyAttributes: 'value' });
      var ops = [
        { value: 'equals', label: 'Equals' },
        { value: 'less', label: 'Less Than' },
        { value: 'greater', label: 'Greater Than' }
      ];
      self.operators = new ArrayDataProvider(ops, { keyAttributes: 'value' });
      var values = [
        { value: 'user', label: 'User' },
        { value: 'admin', label: 'Admin' },
        { value: 'other', label: 'Other' }
      ];
      self.attributeValues = new ArrayDataProvider(values, { keyAttributes: 'value' });
      self.defaultVals = ko.observableArray(["Admin"]);

      // Add button
      self.buttonClick = function (event) {
        self.clickedButton(event.currentTarget.id);
        return true;
      }.bind(self);

      // Footer
      function footerLink(name, id, linkTarget) {
        this.name = name;
        this.linkId = id;
        this.linkTarget = linkTarget;
      }
      self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
     }

     return new ControllerViewModel();
  }
);
