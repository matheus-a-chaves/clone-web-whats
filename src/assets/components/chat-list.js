import React, { Component } from "react";
import "../css/chat-list.css";

export default class ChatList extends Component {
  render() {
    return (
      <>
        <div class="chat-list">
          <div class="chat-list__perfil">
            <div class="chat-list__background-photo"></div>
          </div>
          {/* Parte da msg */}
          <div class="chat-list__cont">
            <div class="chat-list__name">
              <p class="mensa_name">Amor</p>
              <p>Ontem</p>
            </div>
            <div class="chat-list__sub-message">
              <p>Tá acordado?</p>
              <p>Sinal</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
