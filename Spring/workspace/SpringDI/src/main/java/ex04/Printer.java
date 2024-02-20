package ex04;

public class Printer {

	private Document document;
	
	//주입 -> 생성자, 세터
	public Printer() {
		
	}
	
	public Printer(Document document) {
		this.document = document;
	}

	public Document getDocument() {
		return document;
	}

	public void setDocument(Document document) {
		this.document = document;
	}
	
	
}
