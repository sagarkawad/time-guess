import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, onReset, name },
  ref
) {
  const dialog = useRef();

  const userLost = result <= 0;
  const formattedRemainingTime = (result / 1000).toFixed(2);
  const score = Math.round((1 - result / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>{name ? `${name}, you lost` : "you lost"}</h2>}
      {!userLost && (
        <h2>{name ? `${name}'s score : ${score}` : `Your Score : ${score}`}</h2>
      )}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
