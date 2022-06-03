import LoadingModalStyle from "./LoadingModalStyle";

const LoadingModal = (): JSX.Element => {
  return (
    <LoadingModalStyle>
      <div className="modal__stripe">
        <div className="modal__gif-container">
          <img src="/images/loading-modal.gif" className="modal__gif" alt="" />
          <p className="modal__loading-text">Cargando...</p>
        </div>
      </div>
    </LoadingModalStyle>
  );
};

export default LoadingModal;
