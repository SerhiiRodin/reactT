import { Component } from "react";

class Modal extends Component {
  state = {};
  // При монтировании вешаем слушателя
  componentDidMount() {
    window.addEventListener("keydown", this.handlePressESC);
  }

  // При размонтировании убираем слушателя
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressESC);
  }

  // Закрываем модалку при нажатии Escape
  handlePressESC = (event) => {
    if (event.code === "Escape") this.props.closeModal();
  };

  render() {
    const { children, closeModal } = this.props;
    return (
      <div
        className="modal fade show"
        style={{ display: "block", backdropFilter: "blur(5px)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Modal</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
