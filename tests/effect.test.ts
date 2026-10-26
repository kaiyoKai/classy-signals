it("should work", () => {
  const stop = effect(() => {
    console.log("Count ist:", count.get());
    return () => console.log("Cleanup vor nächstem Run");
  });
});
// Und wie soll batch aussehen?
batch(() => {
  count.set(1);
  count.set(2);
}); // Läuft der effect 1x oder 2x?
