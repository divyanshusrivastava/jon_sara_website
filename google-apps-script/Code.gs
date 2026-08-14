function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try {
    const sheet = getRsvpSheet_();
    const params = e.parameter || {};

    sheet.appendRow([
      new Date(),
      params.name || "",
      params.email || "",
      params.attending || "",
      params.companion || "",
      params.companionName || "",
      params.dietary || "",
      params.message || "",
      params.lang || "",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON,
    );
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput("RSVP endpoint is live.");
}

function getRsvpSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("RSVPs");
  if (!sheet) {
    sheet = ss.insertSheet("RSVPs");
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Email",
      "Attending",
      "Companion",
      "Companion name",
      "Dietary",
      "Message",
      "Language",
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  return sheet;
}
