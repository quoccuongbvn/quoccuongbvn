export type TarotStep = "input" | "picking" | "analyzing" | "result";
export type RitualState = "idle" | "cleansing" | "shuffling" | "ready";

export interface TarotCard {
  id: number;
  name: string;
  nameVN: string;
  image: string;
  keywords: string[];
  desc: string;
}

export interface TarotContext {
  step: TarotStep;
  ritual: RitualState;
  question: string;
  pickedCount: number;
  selectedCards: TarotCard[];
}

export type TarotEvent =
  | { type: "SET_QUESTION"; payload: string }
  | { type: "START_READING" }
  | { type: "RITUAL_ADVANCE" }
  | { type: "CARD_PICKED" }
  | { type: "ENTER_ANALYZING" }
  | { type: "ENTER_RESULT" }
  | { type: "RESET" };
