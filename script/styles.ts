import type { elements } from './index';

const css = `
    :root {
        --base: #fff;
        --border: #c8c8c8;
        --border-hover: #91a8c1;
        --text: #000;
        --selected-gradient: linear-gradient(0deg,#d6fcff,#fff 90%);
    }

    .item {
        margin: 4px;
        cursor: pointer;
        padding: 8px 8px 7px;
        border-radius: 5px;
        display: inline-block;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: 1px solid var(--border);
        transition: background .15s linear;
        background: var(--base);
        line-height: 1em;
    }

    .pinned {
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding: 9px;
        border: 0px;
        border-bottom: 1px;
        border-style: solid;
        border-color: var(--border);
    }

    .pinned-title {
        margin: 4px;
        font-size: 15px;
        font-family: Roboto, sans-serif;
        color: var(--text);
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        pointer-events: none;
    }

    .sidebar-controls {
        display: flex;
        position: sticky;
        height: auto !important;
        top: 0px;
        background-color: var(--base) !important;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        padding: 9px;
        border: 0px;
        border-bottom: 1px;
        border-style: solid;
        border-color: var(--border);
    }

    .sidebar-input {
        height: 40px !important;
        margin: 4px;
        border-radius: 5px;
        border: 1px solid var(--border) !important;
        font-family: Roboto, sans-serif;
        background-size: 21px 21px !important;
        background-position: 10px 10px !important;
        background-color: var(--base) !important;
        color: var(--text);
    }

    .settings-details {
        margin: 4px;
        height: 40px;
    }

    .settings-summary {
        list-style: none;
    }

    .settings-button {
        height: 40px;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        cursor: pointer;
        opacity: .8;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    .settings-button:hover {
        transform: scale(1.05)
    }

    .settings-content {
        display: flex;
        flex-direction: column;
        gap: 5px;
        position: absolute;
        right: 13px;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        background-color: var(--base);
    }

    .setting {
        display: flex;
        gap: 5px;
        justify-content: flex-end;
        cursor: pointer;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        line-height: 1em;
        font-family: Roboto, sans-serif;
        font-size: 15.4px;
        color: var(--text);
    }
    .setting:hover {
        background: var(--selected-gradient);
        border: 1px solid var(--border-hover);
    }

    .setting > img {
        height: 1em;
        opacity: .8;
        aspect-ratio: 1 / 1;
    }

    #import-save {
        display: none;
    }

    .search-hidden {
        height: 0px !important;
        border: 0px !important;
        font-size: 0px !important;
        margin: 0px !important;
        visibility: hidden;
    }

    .search-hidden .item-emoji {
        font-size: 0px;
    }

    .site-title {
        z-index: 1;
    }

    .version {
        position: fixed;
        top: 80px;
        right: 320px;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        pointer-events: none;
        color: var(--text);
        font-family: Roboto, sans-serif;
        font-size: 11px;
    }

    @media screen and (min-width: 1150px) {
        .version {
            top: 85px;
            right: 362px;
        }
    }

    .side-controls {
        z-index: 1;
    }

    .random, .discoveries-icon {
        width: 21px;
        cursor: pointer;
        opacity: .8;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    .random:hover, .discoveries-icon:hover {
        transform: scale(1.05);
    }

    .modal {
        max-width: 75%;
        max-height: 75%;
        margin: auto;
        padding-top: 0px;
        border: 1px solid var(--border);
        border-radius: 5px;
        background-color: var(--base);
    }

    .modal::backdrop {
        background-color: rgb(0 0 0 / .5);
    }

    .modal-header {
        position: sticky;
        top: 0;
        display: flex;
        padding-top: 16px;
        padding-bottom: 16px;
        justify-content: space-between;
        background-color: var(--base);
    }

    .modal-title {
        font-size: 20px;
        font-family: Roboto, sans-serif;
        line-height: 35px;
        color: var(--text);
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    .modal-empty {
        font-size: 15px;
        font-family: Roboto, sans-serif;
        color: var(--text);
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        pointer-events: none;
    }

    .display-item {
        margin: 4px;
        padding: 8px 8px 7px;
        border-radius: 5px;
        display: inline-block;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        border: 1px solid var(--border);
        background: var(--base);
        line-height: 1em;
        white-space: nowrap;
        color: var(--text);
    }

    .recipe {
        display: flex;
        align-items: center;
        color: var(--text);
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    .close-button {
        height: 35px;
        padding: 8px 8px 7px;
        border: 1px solid var(--border);
        border-radius: 5px;
        cursor: pointer;
        opacity: .8;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    .close-button + .close-button {
        margin-left: 10px;
    }
    
    .close-button:hover {
        transform: scale(1.05)
    }

    .instance-emoji {
        pointer-events: none;
    }
`;

export function init(elements: elements) {
	elements.styles.appendChild(document.createTextNode(css.trim()));
	document.getElementsByTagName('head')[0].appendChild(elements.styles);
}
