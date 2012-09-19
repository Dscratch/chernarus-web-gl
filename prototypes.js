function HeightMapPixel(Red,Green,Blue,Alpha)
{
	this.red = parseFloat(Red);
	this.green = parseFloat(Green);
	this.blue = parseFloat(Blue);
	this.alpha = parseFloat(Alpha);
};
HeightMapPixel.prototype.greyscaleHeightRGB = function(){
	if(this.red+this.green+this.blue == 0)
		return 765;
	
	return 765/(this.red+this.green+this.blue);
};
HeightMapPixel.prototype.greyscaleHeightR = function(){
	return this.red;
};
HeightMapPixel.prototype.colourHeightRGB = function(){
	if(this.red+this.green+this.blue == 0)
		return 0;
		
	return (this.red * 0.3 + this.green * 0.59 + this.blue * 0.11)/255;//((((this.red * 1000.0)+this.green) * 1000.0)+this.blue)/(255255255/5);
};
//===================================================
function HeightMap()
{
	this.width = 0;
	this.height = 0;
	this.heightMapData = new Array();
};
function Camera()
{
	this.position = new Vector3D();
	
	this.rotation = new Vector3D();
};
Camera.prototype.moveForward()
{
	//this.position
}