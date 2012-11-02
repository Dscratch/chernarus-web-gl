function Vector3D()
{
	this.x = 0;
	this.y = 0;
	this.z = 0;
};
Vector3D.prototype.magnitude = function()
{
	return Math.sqrt( (this.x) + (this.y) + (this.z) );
};
Vector3D.prototype.divideBy = function(value)
{
	if(value == 0)
		return this;
		
	var newVec = new Vector3D();
	
	newVec.x = this.x/value;
	newVec.y = this.y/value;
	newVec.z = this.z/value;
	
	return newVec;
};
Vector3D.prototype.asUnitVector = function()
{
	if(this.x == 0 && this.y == 0 && this.z == 0)
		return this;
		
	return this.divideBy(this.magnitude());
};
Vector3D.prototype.addVector3D = function(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x + value.x;
	newVec.y = this.y + value.y;
	newVec.z = this.z + value.z;
	
	return newVec;
};
Vector3D.prototype.subtractVector3D = function(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x - value.x;
	newVec.y = this.y - value.y;
	newVec.z = this.z - value.z;
	
	return newVec;
};
Vector3D.prototype.rotateX = function(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x;
	newVec.y = this.y*Math.cos(value) - this.z*Math.sin(value);
	newVec.z = this.y*Math.sin(value) + this.z*Math.cos(value);
	
	return newVec;
};
Vector3D.prototype.rotateY = function(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.z*Math.sin(value) + this.x*Math.cos(value);
	newVec.y = this.y;
	newVec.z = this.z*Math.cos(value) - this.x*Math.sin(value);
	
	return newVec;
};
Vector3D.prototype.rotateZ = function(value)
{
	var newVec = new Vector3D();
	
	newVec.x = this.x*Math.cos(value) - this.y*Math.sin(value);
	newVec.y = this.x*Math.sin(value) + this.y*Math.cos(value);
	newVec.z = this.z;
	
	return newVec;
};