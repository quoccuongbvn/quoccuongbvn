import { useEffect, useReducer } from "react";
import { tarotReducer, initialTarotState } from "./actions";

export function useTarotMachine() {
  const [state, dispatch] = useReducer(tarotReducer, initialTarotState);

  // Ritual timing
  useEffect(() => {
    if (state.step !== "picking") return;

    let t1: ReturnType<typeof setTimeout> | undefined;

    if (state.ritual === "cleansing") {
      t1 = setTimeout(() => dispatch({ type: "RITUAL_ADVANCE" }), 2000);
    } else if (state.ritual === "shuffling") {
      t1 = setTimeout(() => dispatch({ type: "RITUAL_ADVANCE" }), 2500);
    }

    return () => {
      if (t1) clearTimeout(t1);
    };
  }, [state.step, state.ritual]);

  // After picking 3 cards -> analyzing -> result
  useEffect(() => {
    if (state.pickedCount !== 3 || state.step !== "picking") return;

    dispatch({ type: "ENTER_ANALYZING" });

    const t = setTimeout(() => {
      dispatch({ type: "ENTER_RESULT" });
    }, 5000);

    return () => clearTimeout(t);
  }, [state.pickedCount, state.step]);

  return {
    ...state,
    setQuestion: (q: string) => dispatch({ type: "SET_QUESTION", payload: q }),
    startReading: () => dispatch({ type: "START_READING" }),
    pickCard: () => dispatch({ type: "CARD_PICKED" }),
    reset: () => dispatch({ type: "RESET" }),
  };
}
