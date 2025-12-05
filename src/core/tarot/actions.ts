import { TarotContext, TarotEvent, RitualState } from "./machine";
import { drawRandomCard } from "./cards";

export const initialTarotState: TarotContext = {
  step: "input",
  ritual: "idle",
  question: "",
  pickedCount: 0,
  selectedCards: [],
};

function nextRitualState(current: RitualState): RitualState {
  switch (current) {
    case "idle":
      return "cleansing";
    case "cleansing":
      return "shuffling";
    case "shuffling":
      return "ready";
    case "ready":
    default:
      return "ready";
  }
}

export function tarotReducer(
  state: TarotContext,
  event: TarotEvent
): TarotContext {
  switch (event.type) {
    case "SET_QUESTION":
      return { ...state, question: event.payload };

    case "START_READING":
      if (!state.question.trim()) return state;
      return {
        ...state,
        step: "picking",
        ritual: "cleansing",
        pickedCount: 0,
        selectedCards: [],
      };

    case "RITUAL_ADVANCE":
      return { ...state, ritual: nextRitualState(state.ritual) };

    case "CARD_PICKED":
      if (state.ritual !== "ready" || state.pickedCount >= 3) return state;
      return {
        ...state,
        pickedCount: state.pickedCount + 1,
        selectedCards: [...state.selectedCards, drawRandomCard()],
      };

    case "ENTER_ANALYZING":
      return { ...state, step: "analyzing" };

    case "ENTER_RESULT":
      return { ...state, step: "result" };

    case "RESET":
      return initialTarotState;

    default:
      return state;
  }
}
