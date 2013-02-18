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
	this.direction = new Vector3D();
	this.direction.z = 1;
	
	this.transform = mat4.create();
	mat4.identity(this.transform);
};
Camera.prototype.moveForward = function()
{
	//this.position = this.position.addVector3D(this.direction);
	this.position.x -= Math.sin(degToRad(this.direction.y));
    this.position.z -= Math.cos(degToRad(this.direction.y));
};
Camera.prototype.moveBackward = function()
{
	//this.position = this.position.subtractVector3D(this.direction);
};
Camera.prototype.rotateLeft = function()
{
	//this.direction = this.direction.rotateY(0.1);
	this.direction.y++;
};
Camera.prototype.rotateRight = function()
{
	//this.direction = this.direction.rotateY(-0.1);
	this.direction.y--;
};