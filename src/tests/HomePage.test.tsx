import React from "react";
import { mount } from "@cypress/react";
import App from "../components/app/App";

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

const validUrl = "https://www.bing.com/";
const invalidUrl = "abc123";

describe("Home Page Tests", () => {
  // Cypress.Cookies.defaults({preserve:"shortenedUrls"});

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("correct layout", () => {
    mount(<App />);
    cy.get(".c-hero").should("be.visible");
    cy.get(".c-shorten").should("be.visible");
    cy.get(".c-advanced-statistics").should("be.visible");
    cy.get(".c-banner").should("be.visible");
    cy.get(".c-footer").should("be.visible");
  });

  it("Shorten API component test", () => {
    cy.clearLocalStorage();
    mount(<App />);

    cy.intercept({
      method: "GET",
      url: "https://api.shrtco.de/v2/*",
    }).as("getShorten");

    cy.get(".c-shorten-input").type(validUrl).should("have.value", validUrl);

    cy.get(".c-shorten-form").find(".c-button").click();

    cy.wait("@getShorten");

    cy.get(".c-shorten-result-item").should("have.length", 1);
  });

  it("LocalStorage test", () => {
    mount(<App />);
    cy.get(".c-shorten-result-item").should("have.length", 1);
  });

  it("Already submitted url & visible error message", () => {
    mount(<App />);
    cy.get(".c-shorten-result-item-or").should("contain", validUrl);

    cy.get(".c-shorten-input").type(validUrl).should("have.value", validUrl);
    cy.get(".c-shorten-form").find(".c-button").click();
    cy.get(".c-shorten-error").should("be.visible");
    cy.get(".c-shorten-input").focus();
    cy.get(".c-shorten-error").should("not.be.visible");
  });

  it("empty url submitted & visible error message", () => {
    mount(<App />);
    cy.get(".c-shorten-input").should("have.value", "");
    cy.get(".c-shorten-form").find(".c-button").click();
    cy.get(".c-shorten-error").should("be.visible");
    cy.get(".c-shorten-input").focus();
    cy.get(".c-shorten-error").should("not.be.visible");
  });

  it("invalid url submitted & visible error message", () => {
    mount(<App />);
    cy.get(".c-shorten-input")
      .type(invalidUrl)
      .should("have.value", invalidUrl);
    cy.get(".c-shorten-form").find(".c-button").click();
    cy.get(".c-shorten-error").should("be.visible");
  });
});
