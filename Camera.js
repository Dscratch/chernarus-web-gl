function Camera()
{
	this.position = new Vector3D();
	this.direction = new Vector3D();
	this.direction.z = 1;
	
	this.moveSpeed = 5;
	
	this.transform = mat4.create();
	mat4.identity(this.transform);
};
Camera.prototype.moveForward = function()
{
	this.position.x -= Math.sin(degToRad(this.direction.y)) * this.moveSpeed;
    this.position.z -= Math.cos(degToRad(this.direction.y)) * this.moveSpeed;
	this.position.y += Math.sin(degToRad(this.direction.x)) * this.moveSpeed;
};
Camera.prototype.moveBackward = function()
{
	this.position.x += Math.sin(degToRad(this.direction.y)) * this.moveSpeed;
    this.position.z += Math.cos(degToRad(this.direction.y)) * this.moveSpeed;
	this.position.y -= Math.sin(degToRad(this.direction.x)) * this.moveSpeed;
};
Camera.prototype.moveRight = function()
{
	this.position.x += Math.sin(degToRad(this.direction.y+90)) * this.moveSpeed;
    this.position.z += Math.cos(degToRad(this.direction.y+90)) * this.moveSpeed;
}
Camera.prototype.moveLeft = function()
{
	this.position.x += Math.sin(degToRad(this.direction.y-90)) * this.moveSpeed;
    this.position.z += Math.cos(degToRad(this.direction.y-90)) * this.moveSpeed;
}
Camera.prototype.rotateLeft = function()
{
	this.direction.y+=1;
};
Camera.prototype.rotateRight = function()
{
	this.direction.y-=1;
};
Camera.prototype.rotateUp = function()
{
	if(this.direction.x < 90)
		this.direction.x +=1;
};
Camera.prototype.rotateDown = function()
{
	this.direction.x -= 1;
};